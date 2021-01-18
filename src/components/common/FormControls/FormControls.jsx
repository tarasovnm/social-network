import s from './FormControls.module.scss';

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        {props.children}
      </div>
      {hasError && <div className={s.errorMessage}>{meta.error}</div>}
    </div>
  );
}

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}