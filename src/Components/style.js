//Style file
const container_Style = {
    marginBottom: 10,
    display: "grid",
};
const cols_style = {
    backgroundColor: "lightblue",
};
const rows_style = {
    margin: 10,
    padding: 10,
};
const contain_row_style = {
    backgroundColor: 'LightGray',
    margin: 10,
    padding: 10,
    height: "auto",
};
const contain_label_style = {
    width: 90,
    height: 90,
}

const style = {
    Container: container_Style,
    Column: cols_style,
    Row: {
        Normal: rows_style,
        Contain: contain_row_style
    },
    Label: contain_label_style,
}

export default style