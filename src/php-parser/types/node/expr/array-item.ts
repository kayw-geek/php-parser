import type { Expr } from '../../node/expr'; // fullyQualifiedNodeName FullyQualifiedExpr

import type { NodeTypeInheritingFromFullyQualifiedExpr } from "../../types";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface ArrayItem extends Omit<Expr, 'nodeType'> {
  nodeType: 'Expr_ArrayItem';

  ["key"] : null | NodeTypeInheritingFromFullyQualifiedExpr;
  ["value"] : NodeTypeInheritingFromFullyQualifiedExpr;
  ["byRef"] : boolean;
  ["unpack"] : boolean;
}

// We also need to export a symbol by using node type
// since the nodeName is possibly duplicated
// for the files need to import all nodes, we needs to use nodeType insteads
export type FullyQualifiedExprArrayItem = ArrayItem;