import React from 'react'
import langsOptions from '../../shared/langsOptions'
import serialize from 'form-serialize'

import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import {
        Tab ,
        Tabs ,
        Avatar ,
        Typography,
        Button,
        TextField,
        Paper,
        Grid,
        Divider,
        Chip,
        Select,
        MenuItem,
        Box,

        Table,
        TableHead,
        TableRow,
        TableCell,
        TableBody,
        Link as MuiLink

} from '@material-ui/core';
import graphql from '../../graphql/client'
import {toSnakeCase} from '../../shared/caseConverter'
import FormDialog from '../../components/FormDialog'

export default function LanguageForm({settings, update, namespace, fields}){

  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedLang, setSelectedLang] = React.useState(null)
  const formRef = React.createRef();

  function handleChange(value){
    const val = value.currentTarget.dataset.value
    const serializedData = serialize(formRef.current, { hash: true, empty: true })
    const data = toSnakeCase(serializedData)

    let next = {}

    fields.map((field)=>{
      next[`${field}_${val}`] = ""
    })

    // const newData = Object.assign({}, data.settings, next)
    const newData = Object.assign({}, {key: settings.key}, next)

    console.log(settings)
    console.log("UPDATEATE", newData)

    update({app: newData})
    toggleDialog()
  }

  function renderLangDialog(){
    return isOpen && (
      <FormDialog 
        open={isOpen}
        //contentText={"lipsum"}
        titleContent={"Save Assigment rule"}
        formComponent={
          //!loading ?
            <form>

              <Select
                value={selectedLang}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}>

                {
                  langsOptions.map((o)=>(
                    <MenuItem value={o.value}>
                      {o.label}
                    </MenuItem> 
                  ))
                }
                
                
              </Select>

            </form> 
            //: <CircularProgress/>
        }
        dialogButtons={
          <React.Fragment>
            <Button onClick={toggleDialog} color="primary">
              Cancel
            </Button>

            <Button //onClick={this.submitAssignment } 
              zcolor="primary"> 
              update
            </Button>

          </React.Fragment>
        }
        //actions={actions} 
        //onClose={this.close} 
        //heading={this.props.title}
        >
      </FormDialog>
    )
  }

  function toggleDialog(){
    setIsOpen(!isOpen)
  }

  function handleSubmit(){
    const serializedData = serialize(formRef.current, { hash: true, empty: true })
    const data = toSnakeCase(serializedData)
    update(data)
  }

  return (

    <div>

      <form ref={formRef}>

        <Button onClick={toggleDialog} variant={"outlined"}>
          Add language
        </Button>

        <Box mt={2} mb={2}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Locale</TableCell>

                { 
                  fields.map((field)=>(
                    <TableCell align="left">{field}</TableCell>
                  ))
                }

              </TableRow>
            </TableHead>
            <TableBody>
              {settings.translations.map(row => (
                <TableRow key={row.locale}>
                  <TableCell component="th" scope="row">
                    {row.locale}
                  </TableCell>

                  {
                    fields.map((field)=>{
                      return <TableCell align="left">
                              <TextField
                                //id="standard-name"
                                label={field}
                                defaultValue={row[field]}
                                name={`${namespace}[${field}_${row.locale}]`}
                                margin="normal"
                              />
                            </TableCell>
                    })
                  }

                  {
                    /*
                      <TableCell align="left">
                        <TextField
                          //id="standard-name"
                          label="Site Description"
                          defaultValue={row.site_description}
                          name={`settings[site_description_${row.locale}]`}
                          margin="normal"
                        />
                      </TableCell>                    
                    */
                  }

                
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
        </Box>

        <Grid container alignContent={"flex-end"}>
          <Button onClick={handleSubmit} variant={"contained"} color={"primary"}>
            Submit
          </Button>        
        </Grid>

      </form>

      {renderLangDialog()}

    </div>
  )
}