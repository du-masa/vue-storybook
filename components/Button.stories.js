import Vue from 'vue';
import Vuex, { mapState } from 'vuex';
import axios from 'axios';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  boolean,
  text,
} from '@storybook/addon-knobs';
import ButtonComponent from './Button';
import LoadingButtonComponent from './LoadingButton';
import LoadingButtonWithMessageComponent from './LoadingButtonWithMessage';

Vue.use(Vuex);

export default {
  title: 'Atoms|Button',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'light', value: '#eeeeee' },
      { name: 'dark', value: '#222222', default: true },
    ],
  },
};

export const BasicButton = () => ({
  components: { ButtonComponent },
  template: '<ButtonComponent text="This is Basic Button"/>',
});

export const LoadingButton = () => ({
  components: { LoadingButtonComponent },
  template: `<LoadingButtonComponent
    :text="text"
    :isLoading="isLoading"
    :handle-click-button="handleClickLoadingButton"
  />`,
  props: {
    isLoading: {
      type: Boolean,
      default: boolean('IsLoading', false),
    },
    text: {
      type: String,
      default: text('Text', 'This is Loading Button'),
    }
  },
  methods: {
    handleClickLoadingButton() {
      action('log handleClickLoadingButton');
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  }
});

export const LoadingButtonWithMessage = () => ({
  components: { LoadingButtonWithMessageComponent },
  template: `
    <LoadingButtonWithMessageComponent
      text="Loading Button with Message"
      :isLoading="isLoadingMessage"
      :message="message"
      :handle-click-button="handleClickFetchMessageButton"
    />`,
  computed: {
    ...mapState({
      isLoadingMessage: state => state.isLoading,
      message: state => state.message,
    })
  },
  methods: {
    handleClickFetchMessageButton() {
      this.$store.dispatch("setMessage", { message: "message" });
    }
  },
  store: new Vuex.Store({
      state: {
        isLoading: false,
        message: '',
      },
      mutations: {
        setLoading(state, isLoading) {
          state.isLoading = isLoading;
        },
        setMessage (state, { message, isLoading}) {
          state.isLoading = isLoading
          state.message = message
        }
      },
      actions: {
        async setMessage ({ commit }) {
          commit('setLoading', true);
          const { data } = await axios.get('http://localhost:3004/post');
          commit('setMessage', { message: data.message, isLoading: false });
        }
      }
    }),
});
