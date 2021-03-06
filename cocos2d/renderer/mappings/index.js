'use strict';

/**
 * enums
 */
const enums = {
  // buffer usage
  USAGE_STATIC: 35044,  // gl.STATIC_DRAW
  USAGE_DYNAMIC: 35048, // gl.DYNAMIC_DRAW
  USAGE_STREAM: 35040,  // gl.STREAM_DRAW

  // index buffer format
  INDEX_FMT_UINT8: 5121,  // gl.UNSIGNED_BYTE
  INDEX_FMT_UINT16: 5123, // gl.UNSIGNED_SHORT
  INDEX_FMT_UINT32: 5125, // gl.UNSIGNED_INT (OES_element_index_uint)

  // vertex attribute semantic
  ATTR_POSITION: 'a_position',
  ATTR_NORMAL: 'a_normal',
  ATTR_TANGENT: 'a_tangent',
  ATTR_BITANGENT: 'a_bitangent',
  ATTR_WEIGHTS: 'a_weights',
  ATTR_JOINTS: 'a_joints',
  ATTR_COLOR: 'a_color',
  ATTR_COLOR0: 'a_color0',
  ATTR_COLOR1: 'a_color1',
  ATTR_UV: 'a_uv',
  ATTR_UV0: 'a_uv0',
  ATTR_UV1: 'a_uv1',
  ATTR_UV2: 'a_uv2',
  ATTR_UV3: 'a_uv3',
  ATTR_UV4: 'a_uv4',
  ATTR_UV5: 'a_uv5',
  ATTR_UV6: 'a_uv6',
  ATTR_UV7: 'a_uv7',

  // vertex attribute type
  ATTR_TYPE_INT8: 5120,    // gl.BYTE
  ATTR_TYPE_UINT8: 5121,   // gl.UNSIGNED_BYTE
  ATTR_TYPE_INT16: 5122,   // gl.SHORT
  ATTR_TYPE_UINT16: 5123,  // gl.UNSIGNED_SHORT
  ATTR_TYPE_INT32: 5124,   // gl.INT
  ATTR_TYPE_UINT32: 5125,  // gl.UNSIGNED_INT
  ATTR_TYPE_FLOAT32: 5126, // gl.FLOAT

  // texture filter
  FILTER_NEAREST: 0,
  FILTER_LINEAR: 1,

  // texture wrap mode
  WRAP_REPEAT: 10497, // gl.REPEAT
  WRAP_CLAMP: 33071,  // gl.CLAMP_TO_EDGE
  WRAP_MIRROR: 33648, // gl.MIRRORED_REPEAT

  // texture format
  // compress formats
  TEXTURE_FMT_RGB_DXT1: 0,
  TEXTURE_FMT_RGBA_DXT1: 1,
  TEXTURE_FMT_RGBA_DXT3: 2,
  TEXTURE_FMT_RGBA_DXT5: 3,
  TEXTURE_FMT_RGB_ETC1: 4,
  TEXTURE_FMT_RGB_PVRTC_2BPPV1: 5,
  TEXTURE_FMT_RGBA_PVRTC_2BPPV1: 6,
  TEXTURE_FMT_RGB_PVRTC_4BPPV1: 7,
  TEXTURE_FMT_RGBA_PVRTC_4BPPV1: 8,

  // normal formats
  TEXTURE_FMT_A8: 9,
  TEXTURE_FMT_L8: 10,
  TEXTURE_FMT_L8_A8: 11,
  TEXTURE_FMT_R5_G6_B5: 12,
  TEXTURE_FMT_R5_G5_B5_A1: 13,
  TEXTURE_FMT_R4_G4_B4_A4: 14,
  TEXTURE_FMT_RGB8: 15,
  TEXTURE_FMT_RGBA8: 16,
  TEXTURE_FMT_RGB16F: 17,
  TEXTURE_FMT_RGBA16F: 18,
  TEXTURE_FMT_RGB32F: 19,
  TEXTURE_FMT_RGBA32F: 20,
  TEXTURE_FMT_R32F: 21,
  TEXTURE_FMT_111110F: 22,
  TEXTURE_FMT_SRGB: 23,
  TEXTURE_FMT_SRGBA: 24,

  // depth formats
  TEXTURE_FMT_D16: 25,
  TEXTURE_FMT_D32: 26,
  TEXTURE_FMT_D24S8: 27,

  // depth and stencil function
  DS_FUNC_NEVER: 512,    // gl.NEVER
  DS_FUNC_LESS: 513,     // gl.LESS
  DS_FUNC_EQUAL: 514,    // gl.EQUAL
  DS_FUNC_LEQUAL: 515,   // gl.LEQUAL
  DS_FUNC_GREATER: 516,  // gl.GREATER
  DS_FUNC_NOTEQUAL: 517, // gl.NOTEQUAL
  DS_FUNC_GEQUAL: 518,   // gl.GEQUAL
  DS_FUNC_ALWAYS: 519,   // gl.ALWAYS

  // render-buffer format
  RB_FMT_RGBA4: 32854,    // gl.RGBA4
  RB_FMT_RGB5_A1: 32855,  // gl.RGB5_A1
  RB_FMT_RGB565: 36194,   // gl.RGB565
  RB_FMT_D16: 33189,      // gl.DEPTH_COMPONENT16
  RB_FMT_S8: 36168,       // gl.STENCIL_INDEX8
  RB_FMT_D24S8: 34041,    // gl.DEPTH_STENCIL

  // blend-equation
  BLEND_FUNC_ADD: 32774,              // gl.FUNC_ADD
  BLEND_FUNC_SUBTRACT: 32778,         // gl.FUNC_SUBTRACT
  BLEND_FUNC_REVERSE_SUBTRACT: 32779, // gl.FUNC_REVERSE_SUBTRACT

  // blend
  BLEND_ZERO: 0,                          // gl.ZERO
  BLEND_ONE: 1,                           // gl.ONE
  BLEND_SRC_COLOR: 768,                   // gl.SRC_COLOR
  BLEND_ONE_MINUS_SRC_COLOR: 769,         // gl.ONE_MINUS_SRC_COLOR
  BLEND_DST_COLOR: 774,                   // gl.DST_COLOR
  BLEND_ONE_MINUS_DST_COLOR: 775,         // gl.ONE_MINUS_DST_COLOR
  BLEND_SRC_ALPHA: 770,                   // gl.SRC_ALPHA
  BLEND_ONE_MINUS_SRC_ALPHA: 771,         // gl.ONE_MINUS_SRC_ALPHA
  BLEND_DST_ALPHA: 772,                   // gl.DST_ALPHA
  BLEND_ONE_MINUS_DST_ALPHA: 773,         // gl.ONE_MINUS_DST_ALPHA
  BLEND_CONSTANT_COLOR: 32769,            // gl.CONSTANT_COLOR
  BLEND_ONE_MINUS_CONSTANT_COLOR: 32770,  // gl.ONE_MINUS_CONSTANT_COLOR
  BLEND_CONSTANT_ALPHA: 32771,            // gl.CONSTANT_ALPHA
  BLEND_ONE_MINUS_CONSTANT_ALPHA: 32772,  // gl.ONE_MINUS_CONSTANT_ALPHA
  BLEND_SRC_ALPHA_SATURATE: 776,          // gl.SRC_ALPHA_SATURATE

  // stencil operation
  STENCIL_OP_KEEP: 7680,          // gl.KEEP
  STENCIL_OP_ZERO: 0,             // gl.ZERO
  STENCIL_OP_REPLACE: 7681,       // gl.REPLACE
  STENCIL_OP_INCR: 7682,          // gl.INCR
  STENCIL_OP_INCR_WRAP: 34055,    // gl.INCR_WRAP
  STENCIL_OP_DECR: 7683,          // gl.DECR
  STENCIL_OP_DECR_WRAP: 34056,    // gl.DECR_WRAP
  STENCIL_OP_INVERT: 5386,        // gl.INVERT

  // cull
  CULL_NONE: 0,
  CULL_FRONT: 1028,
  CULL_BACK: 1029,
  CULL_FRONT_AND_BACK: 1032,

  // primitive type
  PT_POINTS: 0,         // gl.POINTS
  PT_LINES: 1,          // gl.LINES
  PT_LINE_LOOP: 2,      // gl.LINE_LOOP
  PT_LINE_STRIP: 3,     // gl.LINE_STRIP
  PT_TRIANGLES: 4,      // gl.TRIANGLES
  PT_TRIANGLE_STRIP: 5, // gl.TRIANGLE_STRIP
  PT_TRIANGLE_FAN: 6,   // gl.TRIANGLE_FAN
};

// Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

var rendererEnums = {
    // projection
    PROJ_PERSPECTIVE: 0,
    PROJ_ORTHO: 1,
  
    // lights
    LIGHT_DIRECTIONAL: 0,
    LIGHT_POINT: 1,
    LIGHT_SPOT: 2,
  
    // shadows
    SHADOW_NONE: 0,
    SHADOW_HARD: 1,
    SHADOW_SOFT: 2,
  
    // parameter type
    PARAM_INT:             0,
    PARAM_INT2:            1,
    PARAM_INT3:            2,
    PARAM_INT4:            3,
    PARAM_FLOAT:           4,
    PARAM_FLOAT2:          5,
    PARAM_FLOAT3:          6,
    PARAM_FLOAT4:          7,
    PARAM_COLOR3:          8,
    PARAM_COLOR4:          9,
    PARAM_MAT2:           10,
    PARAM_MAT3:           11,
    PARAM_MAT4:           12,
    PARAM_TEXTURE_2D:     13,
    PARAM_TEXTURE_CUBE:   14,
  
    // clear flags
    CLEAR_COLOR: 1,
    CLEAR_DEPTH: 2,
    CLEAR_STENCIL: 4,
    CLEAR_SKYBOX: 8,
  
    //
    BUFFER_VIEW_INT8: 0,
    BUFFER_VIEW_UINT8: 1,
    BUFFER_VIEW_INT16: 2,
    BUFFER_VIEW_UINT16: 3,
    BUFFER_VIEW_INT32: 4,
    BUFFER_VIEW_UINT32: 5,
    BUFFER_VIEW_FLOAT32: 6,
  };

// this file is used for offline effect building.

const typeParams = {
  INT: rendererEnums.PARAM_INT,
  IVEC2: rendererEnums.PARAM_INT2,
  IVEC3: rendererEnums.PARAM_INT3,
  IVEC4: rendererEnums.PARAM_INT4,
  FLOAT: rendererEnums.PARAM_FLOAT,
  VEC2: rendererEnums.PARAM_FLOAT2,
  VEC3: rendererEnums.PARAM_FLOAT3,
  VEC4: rendererEnums.PARAM_FLOAT4,
  COLOR3: rendererEnums.PARAM_COLOR3,
  COLOR4: rendererEnums.PARAM_COLOR4,
  MAT2: rendererEnums.PARAM_MAT2,
  MAT3: rendererEnums.PARAM_MAT3,
  MAT4: rendererEnums.PARAM_MAT4,
  SAMPLER2D: rendererEnums.PARAM_TEXTURE_2D,
  SAMPLERCUBE: rendererEnums.PARAM_TEXTURE_CUBE,
  [rendererEnums.PARAM_FLOAT3]: rendererEnums.PARAM_COLOR3,
  [rendererEnums.PARAM_FLOAT4]: rendererEnums.PARAM_COLOR4
};

const passParams = {
  BACK: enums.CULL_BACK,
  FRONT: enums.CULL_FRONT,
  NONE: enums.CULL_NONE,

  ADD: enums.BLEND_FUNC_ADD,
  SUBTRACT: enums.BLEND_FUNC_SUBTRACT,
  REVERSESUBTRACT: enums.BLEND_FUNC_REVERSE_SUBTRACT,
  ZERO: enums.BLEND_ZERO,
  ONE: enums.BLEND_ONE,
  SRCCOLOR: enums.BLEND_SRC_COLOR,
  ONEMINUSSRCCOLOR: enums.BLEND_ONE_MINUS_SRC_COLOR,
  DSTCOLOR: enums.BLEND_DST_COLOR,
  ONEMINUSDSTCOLOR: enums.BLEND_ONE_MINUS_DST_COLOR,
  SRCALPHA: enums.BLEND_SRC_ALPHA,
  ONEMINUSSRCALPHA: enums.BLEND_ONE_MINUS_SRC_ALPHA,
  DSTALPHA: enums.BLEND_DST_ALPHA,
  ONEMINUSDSTALPHA: enums.BLEND_ONE_MINUS_DST_ALPHA,
  CONSTCOLOR: enums.BLEND_CONSTANT_COLOR,
  ONEMINUSCONSTCOLOR: enums.BLEND_ONE_MINUS_CONSTANT_COLOR,
  CONSTALPHA: enums.BLEND_CONSTANT_ALPHA,
  ONEMINUSCONSTALPHA: enums.BLEND_ONE_MINUS_CONSTANT_ALPHA,
  SRCALPHASATURATE: enums.BLEND_SRC_ALPHA_SATURATE,

  NEVER: enums.DS_FUNC_NEVER,
  LESS: enums.DS_FUNC_LESS,
  EQUAL: enums.DS_FUNC_EQUAL,
  LEQUAL: enums.DS_FUNC_LEQUAL,
  GREATER: enums.DS_FUNC_GREATER,
  NOTEQUAL: enums.DS_FUNC_NOTEQUAL,
  GEQUAL: enums.DS_FUNC_GEQUAL,
  ALWAYS: enums.DS_FUNC_ALWAYS,

  KEEP: enums.STENCIL_OP_KEEP,
  REPLACE: enums.STENCIL_OP_REPLACE,
  INCR: enums.STENCIL_OP_INCR,
  INCR_WRAP: enums.STENCIL_OP_INCR_WRAP,
  DECR: enums.STENCIL_OP_DECR,
  DECR_WRAP: enums.STENCIL_OP_DECR_WRAP,
  INVERT: enums.STENCIL_OP_INVERT
};

let mappings = {
  typeParams,
  passParams,
};

module.exports = mappings;
//# sourceMappingURL=index.js.map
