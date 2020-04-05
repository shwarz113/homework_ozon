import { shallowMount } from '@vue/test-utils';
import Calendar from '../Calendar.tsx';

describe('Calendar.tsx', () => {
  test('отрисовывает props.msg, если они переданы', () => {
    const wrapper = shallowMount(Calendar, {
      propsData: {
        title: 'Заголовок',
        weekNames: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        allDays: []
      }
    });
    console.log('wrapper',wrapper);
    expect(wrapper.text()).toMatch('Заголовок')
  })
});
