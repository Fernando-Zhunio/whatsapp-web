import { RouteProps } from "react-router-dom";
import { Status } from "../../../shared/enums/status";

export type GuardFunctionArgs = RouteProps;
export type GuardFunction = (args: GuardFunctionArgs) => boolean;
export type GuardFunctionState = (status: Status) => boolean;