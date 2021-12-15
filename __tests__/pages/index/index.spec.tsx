import { render } from '@testing-library/react';
import IndexPage from '../../../pages/index';

describe('index page', () => {
  it('renders without crashing', async () => {
    const { container, findAllByText } = render(<IndexPage />);

    const result = await findAllByText('Girabel');

    console.log(result);

    expect(container).toBeInTheDocument();
  });
});
