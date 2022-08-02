export const Div = (props) => {

    const {justify = 'center', align = 'center', style, direction='row'} = props
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
                flex: 1,
                width: '100%',
                
                ...style
            }}
        >
            {props.children}
        </div>
    )
}