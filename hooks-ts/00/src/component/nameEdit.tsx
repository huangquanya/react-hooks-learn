import * as React from 'react'

interface Props {
    initialUserName: string;
    editingName: string;
    onNameUpdated: () => any;
    onEditingNameUpdated: (newEditingName: string) => any;
    disabled: number;
}

export const NameEditComponent = (props: Props) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onEditingNameUpdated(e.target.value)
    }
    const onNameSubmit = (e: any): void => {
        props.onNameUpdated()
    }
    console.log(props.disabled)
    return (
        <>
            <label>update name:</label>
            <input value={props.editingName} onChange={onChange} />
            <button onClick={onNameSubmit} disabled={props.disabled !== 0} >改变名字</button>
            <br />
            {
                (function (disabled) {
                    switch (disabled) {
                        case 1:
                            return <span>不为空或未进行改变</span>
                        case 2:
                            return <span>应包含数字大小写字母和.,，@_</span>
                        default:
                            return <span>'勾'</span>
                    }
                })(props.disabled)
            }
        </>
    )
}
