import { MsAsPrettyTimePipe } from './ms-as-pretty-time.pipe';

describe('MsAsPrettyTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MsAsPrettyTimePipe();
    expect(pipe).toBeTruthy();
  });
});
