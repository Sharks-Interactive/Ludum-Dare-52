using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IAITargeter
{
    public int Priority { get; }
    public (bool, Vector3) GetTarget();
}
