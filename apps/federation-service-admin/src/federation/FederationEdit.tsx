import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FederationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
