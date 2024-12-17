import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    width: number;
    height: number;
    shader: string;
    uniforms: Record<string, any>;
}>;
export default _default;
