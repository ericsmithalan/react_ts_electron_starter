import { IRootStore } from "@app/store";
import { connect } from "react-redux";
import { HomePage, IHomePageProps } from "@app/pages";

const mapStateToProps = (state: IRootStore): IHomePageProps => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export const EditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
