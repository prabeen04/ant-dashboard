export const validate = values => {
    let errors = {};

    if (!values.members || !values.members.length) {
        errors.members = { _error: 'At least one member must be entered' };
      } else {
        const membersArrayErrors = [];
        values.members.forEach((member, memberIndex) => {
          const memberErrors = {};
          if (!member || !member.select1) {
            memberErrors.select1 = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.date) {
            memberErrors.date = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.select2) {
            memberErrors.select2 = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.description) {
            memberErrors.description = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.field1) {
            memberErrors.field1 = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.field2) {
            memberErrors.field2 = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
        });
        if (membersArrayErrors.length) {
          errors.members = membersArrayErrors;
        }
      }
    return errors;
}