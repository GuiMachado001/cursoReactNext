type DefaultInpitProps = {
    id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type }: DefaultInpitProps){
    return(
        <>
            <label htmlFor={id}>Task</label>
            <input id={id} type={type} />
        </>
    );
}