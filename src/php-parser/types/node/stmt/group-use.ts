import type { Stmt } from '../../node/stmt'; // fullyQualifiedNodeName FullyQualifiedStmt

import type { NodeTypeInheritingFromFullyQualifiedName } from "../../types";
import type { NodeTypeInheritingFromFullyQualifiedStmtUseUse } from "../../types";

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface GroupUse extends Omit<Stmt, 'nodeType'> {
  nodeType: 'Stmt_GroupUse';

  ["type"] : number;
  ["prefix"] : NodeTypeInheritingFromFullyQualifiedName;
  ["uses"] : NodeTypeInheritingFromFullyQualifiedStmtUseUse[];
}

// We also need to export a symbol by using node type
// since the nodeName is possibly duplicated
// for the files need to import all nodes, we needs to use nodeType insteads
export type FullyQualifiedStmtGroupUse = GroupUse;