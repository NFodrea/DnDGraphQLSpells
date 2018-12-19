import * as React from 'react'
import SpellTable from '../spellTable/SpellTable';
import SearchAndFilter from '../searchAndFilter/SearchAndFilter';

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
                <SearchAndFilter />

                <SpellTable />
            </div>
        );
    }
};
