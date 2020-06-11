import * as React from 'react';
interface Props{
    data: any
}
export function DataTable(props: Props) {
    const getKeys = () => {
        return props.data && props.data.length && Object.keys(props.data[0]);
    }

    const getHeader = () => {
        const keys = getKeys();
        return keys && keys.map((key, index) => {
            const dataKey = key.replace(/["]/g, "")
            return <th key={key}>{dataKey.toUpperCase()}</th>
        });
    }

    const RenderRow = (dataProps: any) => {
        return dataProps.keys.map((key: any, index: number) => {
            const dataKey = dataProps.data[key].replace(/["]/g, "")
            return <td key={index}>{dataKey}</td>
        })
    }

    const getRowsData = () => {
        const items = props.data;
        const keys = getKeys();
        return items ? items.map((row: any, index: number) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
        }) : <div></div>
    }

    return (
        <div className={"data-table"}>
            <table>
                <thead>
                    <tr>{getHeader()}</tr>
                </thead>
                <tbody>
                    {getRowsData()}
                </tbody>
            </table>
        </div>

    );
}

export default DataTable;
