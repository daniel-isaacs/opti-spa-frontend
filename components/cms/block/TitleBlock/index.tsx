import type { IContentComponent } from '@optimizely/cms/models'
import type { TitleBlock } from 'schema'
import { EditableField } from '@optimizely/cms/components'
import React from 'react';
import Typography from '@mui/material/Typography'
import { useContentEditMode } from '@optimizely/cms/context'
export const TitleBlockComponent : IContentComponent<TitleBlock> = props => { 
    const { contentEditable } = useContentEditMode(props.content)    
    return <EditableField field='title' contentEditable={ contentEditable }>
        <Typography component="div" variant='h4' sx={{mb: 2, fontWeight: 700 }} ><EditableField field='' inline contentEditable={ contentEditable }>{ props.content?.title }</EditableField></Typography>
    </EditableField>
}
TitleBlockComponent.getContentFields = () => [ 'title' ]
TitleBlockComponent.displayName = "CMS-Component: TitleBlock"
export default TitleBlockComponent
