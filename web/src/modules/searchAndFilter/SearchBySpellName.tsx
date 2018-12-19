import * as React from 'react';
import { TextField } from "@material-ui/core";


export default class SearchBySpellName extends React.Component {
  render() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            width: "20%"
        }}>
            <TextField
                id="outlined-search"
                label="search for a spell"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth={true}
            />
        </div>
    )
  }
}
