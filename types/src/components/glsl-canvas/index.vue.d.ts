import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<number>;
        default: number;
    };
    height: {
        type: PropType<number>;
        default: number;
    };
    shader: {
        type: PropType<string>;
        default: string;
    };
    uniforms: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<number>;
        default: number;
    };
    height: {
        type: PropType<number>;
        default: number;
    };
    shader: {
        type: PropType<string>;
        default: string;
    };
    uniforms: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
}>> & Readonly<{}>, {
    width: number;
    height: number;
    shader: string;
    uniforms: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
