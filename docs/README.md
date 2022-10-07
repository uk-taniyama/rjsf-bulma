rjsf-bulma - v5.0.0-beta.1

# rjsf-bulma - v5.0.0-beta.1

## Table of contents

### References

- [default](README.md#default)

### Interfaces

- [BulmaContext](interfaces/BulmaContext.md)
- [FilesInfoProps](interfaces/FilesInfoProps.md)

### Type Aliases

- [FileInfoType](README.md#fileinfotype)

### Variables

- [Form](README.md#form)
- [Templates](README.md#templates)
- [Theme](README.md#theme)
- [Widgets](README.md#widgets)

### Functions

- [createIsSmallUiSchema](README.md#createissmalluischema)

## References

### default

Renames and re-exports [Form](README.md#form)

## Type Aliases

### FileInfoType

Ƭ **FileInfoType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dataURL?` | `string` \| ``null`` |
| `name` | `string` |
| `size` | `number` |
| `type` | `string` |

## Variables

### Form

• `Const` **Form**: `React.ComponentType`<`FormProps`\>

___

### Templates

• **Templates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ArrayFieldItemTemplate` | `FC`<`ArrayFieldTemplateItemType`<`any`, `any`\>\> |
| `ArrayFieldTemplate` | `FC`<`ArrayFieldTemplateProps`<`any`, `any`\>\> |
| `BaseInputTemplate` | `FC`<`WidgetProps`<`any`, `any`\>\> |
| `ButtonTemplates` | { `AddButton`: `FC`<`IconButtonProps`<`any`, `any`\>\> ; `MoveDownButton`: `FC`<`IconButtonProps`<`any`, `any`\>\> ; `MoveUpButton`: `FC`<`IconButtonProps`<`any`, `any`\>\> ; `RemoveButton`: `FC`<`IconButtonProps`<`any`, `any`\>\> ; `SubmitButton`: `FC`<`SubmitButtonProps`<`any`, `any`\>\>  } |
| `ButtonTemplates.AddButton` | `FC`<`IconButtonProps`<`any`, `any`\>\> |
| `ButtonTemplates.MoveDownButton` | `FC`<`IconButtonProps`<`any`, `any`\>\> |
| `ButtonTemplates.MoveUpButton` | `FC`<`IconButtonProps`<`any`, `any`\>\> |
| `ButtonTemplates.RemoveButton` | `FC`<`IconButtonProps`<`any`, `any`\>\> |
| `ButtonTemplates.SubmitButton` | `FC`<`SubmitButtonProps`<`any`, `any`\>\> |
| `DescriptionFieldTemplate` | `FC`<`DescriptionFieldProps`<`any`, `any`\>\> |
| `ErrorListTemplate` | `FC`<`ErrorListProps`<`any`, `any`\>\> |
| `FieldErrorTemplate` | `FC`<`FieldErrorProps`<`any`, `any`\>\> |
| `FieldHelpTemplate` | `FC`<`FieldHelpProps`<`any`, `any`\>\> |
| `FieldTemplate` | `FC`<`FieldTemplateProps`<`any`, `any`\>\> |
| `FilesInfoTemplate` | `FC`<[`FilesInfoProps`](interfaces/FilesInfoProps.md)\> |
| `ObjectFieldTemplate` | `FC`<`ObjectFieldTemplateProps`<`any`, `any`\>\> |
| `TitleFieldTemplate` | `FC`<`TitleFieldProps`<`any`, `any`\>\> |
| `WrapIfAdditionalTemplate` | `FC`<`WrapIfAdditionalTemplateProps`<`any`, `any`\>\> |

___

### Theme

• `Const` **Theme**: `ThemeProps`

___

### Widgets

• **Widgets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CheckboxWidget` | `FC`<`WidgetProps`<`any`, `any`\>\> |
| `CheckboxesWidget` | `FC`<`WidgetProps`<`any`, `any`\>\> |
| `FileWidget` | `FC`<`WidgetProps`<`any`, `any`\>\> |
| `RadioWidget` | `FC`<`WidgetProps`<`any`, `any`\>\> |
| `RangeWidget` | `FC`<`WidgetProps`<`any`, `any`\>\> |
| `SelectWidget` | `FC`<`WidgetProps`<`any`, `any`\>\> |
| `TextareaWidget` | `FC`<`WidgetProps`<`any`, `any`\>\> |

## Functions

### createIsSmallUiSchema

▸ **createIsSmallUiSchema**(`uiSchema?`): `UiSchema`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uiSchema` | `UiSchema`<`any`, `any`\> |

#### Returns

`UiSchema`
