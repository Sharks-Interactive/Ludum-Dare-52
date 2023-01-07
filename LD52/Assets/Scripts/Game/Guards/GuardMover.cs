using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class GuardMover : MonoBehaviour
{
    public float Speed = 5;

    private List<IAITargeter> _targeters = new ();
    private Vector3 _currentTarget;

    private void Awake()
    {
        _targeters = GetComponents<IAITargeter>().OrderBy(t => t.Priority).ToList();
    }

    void Update()
    {
        _targeters.ForEach(t => _currentTarget = t.GetTarget().Item1 ? t.GetTarget().Item2 : _currentTarget);

        transform.position = Vector3.MoveTowards(transform.position, _currentTarget, (Speed * 150) * Time.deltaTime);
    }
}
