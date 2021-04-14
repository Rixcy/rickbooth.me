import React from 'react'

export type ExampleComponentProps = {
  text?: string
}

export const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  const { text, ...restProps } = props
  return (
    <div data-testid="example-component" {...restProps}>
      {text}
    </div>
  )
}

ExampleComponent.defaultProps = {
  text: 'Default Text',
}
