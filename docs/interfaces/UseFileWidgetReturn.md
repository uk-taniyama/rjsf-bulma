[rjsf-bulma - v5.0.0-beta.2](../README.md) / UseFileWidgetReturn

# Interface: UseFileWidgetReturn

## Table of contents

### Properties

- [dragOver](UseFileWidgetReturn.md#dragover)
- [droppableProps](UseFileWidgetReturn.md#droppableprops)
- [fileInputEl](UseFileWidgetReturn.md#fileinputel)
- [filesInfo](UseFileWidgetReturn.md#filesinfo)
- [handleChoose](UseFileWidgetReturn.md#handlechoose)
- [handleClear](UseFileWidgetReturn.md#handleclear)

## Properties

### dragOver

• **dragOver**: `boolean`

drag-over at droppable.

___

### droppableProps

• **droppableProps**: `Object`

droppable file handlers properties.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onDragEnter` | `DragEventHandler`<`Element`\> |
| `onDragLeave` | `DragEventHandler`<`Element`\> |
| `onDragOver` | `DragEventHandler`<`Element`\> |
| `onDrop` | `DragEventHandler`<`Element`\> |

___

### fileInputEl

• **fileInputEl**: `Element`

<input type=file>

___

### filesInfo

• **filesInfo**: [`FileInfoType`](../README.md#fileinfotype)[]

chosen file(s).

___

### handleChoose

• **handleChoose**: () => `void`

#### Type declaration

▸ (): `void`

choose file(s).

##### Returns

`void`

___

### handleClear

• **handleClear**: () => `void`

#### Type declaration

▸ (): `void`

clear chosen file(s).

##### Returns

`void`
