
export type TInpupt = {
    label: string;
    value: number;
    defaultValue: number;

    setValue: React.ChangeEventHandler<HTMLInputElement>
    percent?: boolean;
    isRow?: boolean;
};
