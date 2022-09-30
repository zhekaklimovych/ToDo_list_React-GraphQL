export const validateEditTask = values => {
    const errors = {};
    if (!values.taskStatus) {
        errors.taskStatus = 'Required';
    } else if (values.taskStatus.length > 15) {
        errors.taskStatus = 'Must be 15 characters or less';
    }
    return errors;
};

export const validateEditTaskBody = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 20) {
        errors.title = 'Must be 20 characters or less';
    }

    if (!values.description) {
        errors.description = 'Required';
    } else if (values.description.length > 40) {
        errors.description = 'Must be 40 characters or less';
    }
    return errors;
}
