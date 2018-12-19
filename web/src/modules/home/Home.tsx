import * as React from 'react'
import { TextField } from "@material-ui/core";
import ClassesHeader from '../../shared/ClassesHeader';
import SpellTable from '../spellTable/SpellTable';

interface Props {
    // non-style props
    foo: number;
    bar: boolean;
    // injected style props
    classes: {
        root: string;
        button: string;
        textField: string;
    };
}
export default class Home extends React.Component<Props> {
    render() {
        return (
            <div style={{
                marginTop: 20
            }}>
                <ClassesHeader />
                <div style={{
                    display: "flex",
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    width: "100%"
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
                <SpellTable />
            </div>
        );
    }
};
