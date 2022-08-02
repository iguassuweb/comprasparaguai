import Image from 'next/image'

export const Img = (props) => <div style={props.style}>
    <Image {...props} />
</div>