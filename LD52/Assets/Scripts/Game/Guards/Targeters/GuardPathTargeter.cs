using SharkUtils;
using System.Collections.Generic;
using UnityEngine;

public class GuardPathTargeter : MonoBehaviour, IAITargeter
{
    public int Priority { get => 0; }
    public List<Vector3> Path = new();
    private int _currentPathIndex = 1;

    public (bool, Vector3) GetTarget()
    {
        if (Vector2.Distance(transform.position, Path[_currentPathIndex]) < 0.01f)
            _currentPathIndex = (_currentPathIndex == Path.Count - 1) ? 0 : _currentPathIndex + 1;

        return (true, Path[_currentPathIndex]);
    }

#if UNITY_EDITOR
    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.green;

        for (int i = 0; i < Path.Count; i++)
        {
            if (i > 0) Gizmos.DrawLine(Path[i - 1], Path[i]);

            Gizmos.DrawCube(Path[i], Vector3.one);

            if (i == Path.Count - 1 && i > 0) Gizmos.DrawLine(Path[i], Path[0]);
        }
    }
#endif
}
