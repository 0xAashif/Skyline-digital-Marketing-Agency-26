/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MotionConfig } from 'motion/react';
import { AppRoutes } from './app/router';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppRoutes />
    </MotionConfig>
  );
}
