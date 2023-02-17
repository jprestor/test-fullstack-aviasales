/* eslint-disable */
import matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { describe, it, expect } from 'vitest';

import { makeStore } from '@/src/store';
import { FormContacts } from '@/forms';

expect.extend(matchers);

describe('FormContacts', () => {
  it('fails with wrong email format', async () => {
    const store = makeStore();

    const { container } = render(
      <Provider store={store}>
        <FormContacts />
      </Provider>
    );

    await user.click(screen.getByRole('textbox'));
    await user.keyboard('notEmail');
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Неверный формат почты')).toBeInTheDocument();
  });
});
