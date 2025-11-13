import {
  Banner,
  HomeLayout as BasicHomeLayout,
  Layout as BasicLayout,
  getCustomMDXComponent as basicGetCustomMDXComponent,
} from '@rspress/core/theme';
import {
    LlmsContainer,
    LlmsCopyButton,
    LlmsViewOptions,
} from '@rspress/plugin-llms/runtime';

import { useLang } from '@rspress/core/runtime';

const Layout = () => {
  const lang = useLang();
  return (
    <BasicLayout
      beforeNav={
        <Banner
          href="/"
          message={
              '🚧 confkeeper 正在公司内部测试中 请勿在生产环境使用'
          }
        />
      }
    />
  );
};
function getCustomMDXComponent() {
    const { h1: H1, ...components } = basicGetCustomMDXComponent();

    const MyH1 = ({ ...props }) => {
        return (
            <>
                <H1 {...props} />
                <LlmsContainer>
                    <LlmsCopyButton />
                    <LlmsViewOptions />
                </LlmsContainer>
            </>
        );
    };
    return {
        ...components,
        h1: MyH1,
    };
}

export { Layout, getCustomMDXComponent };
export * from '@rspress/core/theme';