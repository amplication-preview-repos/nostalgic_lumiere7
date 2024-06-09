import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FederationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="contactInformation"
          multiline
          source="contactInformation"
        />
        <TextInput label="country" source="country" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
