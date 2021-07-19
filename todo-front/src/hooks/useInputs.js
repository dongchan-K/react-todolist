import React, { useCallback, useState } from 'react';

const useInputs = (initialState) => {
  const [form, setForm] = useState(initialState);

  const changeForm = useCallback(({ target }) => {
    const { name, value } = target;

    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const initialForm = useCallback(() => setForm(initialState), [initialState]);

  return { form, changeForm, initialForm };
};

export default useInputs;
