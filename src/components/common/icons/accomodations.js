import React from "react";
import Svg, { Path } from "react-native-svg";
import { White } from "../../../const/colors";

const AccomodationIcon = props => (
  <Svg viewBox="0 0 480 480" width={24} height={24} fill={White} {...props}>
    <Path d="M304 304.808V232c0-13.232-10.768-24-24-24H56c-13.232 0-24 10.768-24 24v72.808C13.768 308.528 0 324.688 0 344v128c0 4.416 3.584 8 8 8h32c4.416 0 8-3.584 8-8v-24h240v24c0 4.416 3.584 8 8 8h32c4.416 0 8-3.584 8-8V344c0-19.312-13.768-35.472-32-39.192zM48 232c0-4.408 3.592-8 8-8h224c4.408 0 8 3.592 8 8v72h-16v-32c0-13.232-10.768-24-24-24h-48c-13.232 0-24 10.768-24 24v32h-16v-32c0-13.232-10.768-24-24-24H88c-13.232 0-24 10.768-24 24v32H48v-72zm208 40v32h-64v-32c0-4.408 3.592-8 8-8h48c4.408 0 8 3.592 8 8zm-112 0v32H80v-32c0-4.408 3.592-8 8-8h48c4.408 0 8 3.592 8 8zm176 192h-16v-24c0-4.416-3.584-8-8-8H40c-4.416 0-8 3.584-8 8v24H16v-64h304v64zm0-80H16v-40c0-13.232 10.768-24 24-24h256c13.232 0 24 10.768 24 24v40zM472 304H360c-4.416 0-8 3.584-8 8v120h16v-48h96v48h16V312c0-4.416-3.584-8-8-8zm-8 64h-96v-48h96v48z" />
    <Path d="M400 336h32v16h-32zM455.592 237.464l-16-48A8.004 8.004 0 00432 184h-32a8 8 0 00-7.592 5.472l-16 48a7.993 7.993 0 001.104 7.208A7.995 7.995 0 00384 248h24v24h-16v16h48v-16h-16v-24h24a7.98 7.98 0 006.488-3.328 8.018 8.018 0 001.104-7.208zM395.096 232l10.672-32h20.472l10.664 32h-41.808z" />
    <Path d="M475.272 104.696l-232-104a8.04 8.04 0 00-6.544 0l-232 104A8.007 8.007 0 000 112v96h16v-90.824L240 16.768l224 100.416V208h16v-96a8.007 8.007 0 00-4.728-7.304z" />
    <Path d="M295.224 110.672l-15.784 2.656A39.39 39.39 0 01280 120c0 22.056-17.944 40-40 40s-40-17.944-40-40 17.944-40 40-40c4.576 0 9.072.768 13.344 2.28l5.328-15.088A55.82 55.82 0 00240 64c-30.88 0-56 25.12-56 56s25.12 56 56 56 56-25.12 56-56a56.6 56.6 0 00-.776-9.328z" />
    <Path d="M290.344 66.344L240 116.688l-10.344-10.344-11.312 11.312 16 16A7.978 7.978 0 00240 136a7.978 7.978 0 005.656-2.344l56-56-11.312-11.312z" />
  </Svg>
);

export { AccomodationIcon };
