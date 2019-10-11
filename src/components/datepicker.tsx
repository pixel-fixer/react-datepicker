import * as React from "react";

export interface DatepickerProps { compiler: string; framework: string; }

export const Datepicker = (props: DatepickerProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;