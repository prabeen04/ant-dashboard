export const validateSecondArray = (values, x) => {
    const errors = {};
    if (!values.member || !values.member.length) {
        errors.member = { _error: 'At least one member must be entered' };
      } else {
        const memberArrayErrors = [];
        values.member.forEach((member, memberIndex) => {
          const memberErrors = {};
          if (!member || !member.select1) {
            memberErrors.select1 = 'Required';
            memberArrayErrors[memberIndex] = memberErrors;
          }

          if (!member || !member.field2) {
            memberErrors.field2 = 'Required';
            memberArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.field3) {
            memberErrors.field3 = 'Required';
            memberArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.field4) {
            memberErrors.field4 = 'Required';
            memberArrayErrors[memberIndex] = memberErrors;
          }
        //   if(typeof member.field5 !== 'number'){
        //     console.log('typeof member.field5')
        //     memberErrors.field5 = `you must enter a number`;
        //     memberArrayErrors[memberIndex] = memberErrors;
        //   }
          if (!member || !member.field5) {
            memberErrors.field5 = 'Required';
            memberArrayErrors[memberIndex] = memberErrors;
          }
          if(member.field4 < member.field5){
            memberErrors.field5 = `value must be less than ${member.field4}`;
            memberArrayErrors[memberIndex] = memberErrors;
          }
      
          if (!member || !member.field6) {
            memberErrors.field6 = 'Required';
            memberArrayErrors[memberIndex] = memberErrors;
          }
        });
        if (memberArrayErrors.length) {
          errors.member = memberArrayErrors;
        }
      }
    return errors;
    console.log(errors)

}