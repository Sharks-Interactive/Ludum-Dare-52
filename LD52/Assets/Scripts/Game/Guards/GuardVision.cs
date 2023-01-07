using UnityEngine;

public class GuardVision : MonoBehaviour
{
    public float VisionDistance;
    private GameObject _player;

    public GameObject Target;

    private void Awake()
    {
        _player = GameObject.FindGameObjectWithTag("Player");
    }

    void Update()
    {
        // Increase our vision so we don't easily lose players after locking on
        if (Vector2.Distance(transform.position, _player.transform.position) < VisionDistance * (Target == null ? 1.2f : 1))
            Target = _player;
        else
            Target = null;
    }

#if UNITY_EDITOR
    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.yellow;

        Gizmos.DrawSphere(transform.position, VisionDistance);
    }
#endif
}
