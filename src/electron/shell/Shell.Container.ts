import { IRootStore, ShellStore } from "@app/store";
import { Shell } from "@electron/shell/Shell";
import { connect } from "react-redux";

export interface IShellPropsFromState extends ShellStore.IState {}

export interface IShellDispatchFromProps {
    updateTitle: (value: string) => void;
}

const mapStateToProps = (state: IRootStore): IShellPropsFromState => ({
    title: state.shellStore.title,
    width: state.shellStore.width,
    height: state.shellStore.height,
    size: state.shellStore.size,
    isTitlebarVisible: state.shellStore.isTitlebarVisible
});

const mapDispatchToProps = (dispatch: any): IShellDispatchFromProps => ({
    updateTitle: (value: string) =>
        dispatch(ShellStore.actions.changeTitle(value))
});

export const ShellContainer = connect<
    IShellPropsFromState,
    IShellDispatchFromProps
>(
    mapStateToProps,
    mapDispatchToProps
)(Shell);
