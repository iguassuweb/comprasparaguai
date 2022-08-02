export const Content = (props) => {

    const {backgroundColor = '#fff', style, maxWidth = '100%', innerColor = backgroundColor } = props

    return (
        <div
            style={{
                width: '100%',
                padding: 0,
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                backgroundColor,
                ...style
            }}>
                <div style={{maxWidth, width: '100%', backgroundColor: innerColor, padding: 0}}>
                {props.children}
                </div>
                
            </div>
    )
} 