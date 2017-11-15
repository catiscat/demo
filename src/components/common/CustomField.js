import React from 'react';
import {
  FormGroup,
  HelpBlock,
  InputGroup,
  IconFont
} from 'rsuite';
import { Field } from 'form-lib';

export const CustomField = ({ name, label, accepter, error, icon, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <InputGroup inside size="lg">
      {icon ?
        <InputGroup.Addon>
          <IconFont icon={icon} />
        </InputGroup.Addon>
        : null
      }
    </InputGroup>
    <Field name={name} accepter={accepter} {...props} />
    <HelpBlock className={error ? 'error' : ''}>{error}</HelpBlock>
  </FormGroup>
);

export default CustomField;
