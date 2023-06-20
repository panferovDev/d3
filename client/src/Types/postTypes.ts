export type PostType = {
    id: number;
    img: string;
    title: string
};

export type PostFormType = {
    title: HTMLInputElement,
    file: HTMLInputElement & { files: FileList}
}

export type PostSubmitEventType  = React.FormEvent<HTMLFormElement & PostFormType>