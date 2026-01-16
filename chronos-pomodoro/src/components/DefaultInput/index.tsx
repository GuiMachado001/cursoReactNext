type DefaultInpitProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInpitProps){
    return(
        <>
            {/* {if ? 'verdadeiro' : 'Falso'} */}

            {labelText && <label htmlFor={id}>{ labelText }</label>}
            <input id={id} type={type} {...rest} />
        </>
    );
}