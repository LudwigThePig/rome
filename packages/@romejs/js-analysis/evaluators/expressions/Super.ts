/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from '../../scopes';
import {Super, _super, AnyNode} from '@romejs/js-ast';

export default function Super(node: AnyNode, scope: Scope) {
  node = _super.assert(node);
  throw new Error('unimplemented');
}
