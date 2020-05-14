import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import FileSaver from "file-saver";
import CameraPage from "../../app/containers/CameraPage";
import { configureStore } from "../../app/store/configureStore";

jest.mock("file-saver", () => jest.genMockFromModule("file-saver"));
Enzyme.configure({ adapter: new Adapter() });

function setup(initialState = {}) {
  const store = configureStore(initialState);
  const history = createBrowserHistory();
  const provider = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CameraPage
          match={{ params: { deviceId: "" }, isExact: true, path: "", url: "" }}
        />
      </ConnectedRouter>
    </Provider>
  );
  const app = mount(provider);

  return app;
}

describe("containers", () => {
  describe("App", () => {
    it("should render", () => {
      // console.log(setup().app.debug());
      const comp = setup().find(`[data-tclass="cameraContainer"]`);
      expect(comp.length).toBe(1);
    });

    it("should go fullscreen", () => {
      const mockedFn = jest.fn();
      HTMLVideoElement.prototype.requestFullscreen = mockedFn;

      const comp = setup().find(`[data-tclass="fullscreenBtn"]`);
      comp.simulate("click");

      expect(mockedFn).toBeCalledTimes(1);
    });

    it("should capture screenshots", () => {
      const comp = setup().find(`[data-tclass="captureBtn"]`);
      comp.simulate("click");

      expect(FileSaver.saveAs).toBeCalledTimes(1);
      expect(FileSaver.saveAs).toHaveBeenCalledWith(null, "image.png");
    });

    it("should toggle mirroring", () => {
      const app = setup();
      const webcamComp = app.find(`[data-tclass="webcamComp"]`).first();
      const btn = app.find(`[data-tclass="mirrorBtn"]`);

      expect(webcamComp.prop("mirrored")).toBe(false);
      btn.simulate("click");

      const updatedWebcamComp = app.find(`[data-tclass="webcamComp"]`).first();
      expect(updatedWebcamComp.prop("mirrored")).toBe(true);
    });
  });
});
