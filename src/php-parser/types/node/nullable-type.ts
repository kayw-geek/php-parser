import type { ComplexType } from './complex-type'; // fullyQualifiedNodeName FullyQualifiedComplexType

import type { NodeTypeInheritingFromFullyQualifiedIdentifier } from "../types";
import type { NodeTypeInheritingFromFullyQualifiedName } from "../types";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface NullableType extends Omit<ComplexType, 'nodeType'> {
  nodeType: 'NullableType';

  ["type"] : NodeTypeInheritingFromFullyQualifiedIdentifier | NodeTypeInheritingFromFullyQualifiedName;
}

// We also need to export a symbol by using node type
// since the nodeName is possibly duplicated
// for the files need to import all nodes, we needs to use nodeType insteads
export type FullyQualifiedNullableType = NullableType;