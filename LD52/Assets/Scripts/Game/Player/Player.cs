using UnityEngine;

[System.Serializable]
public struct PlayerStats
{
    public float Acceleration;
    public float Decceleration;
    public float MaxSpeed;
}

public class Player : MonoBehaviour
{
    public PlayerStats Stats;

    private Rigidbody2D _rb;
    private Movement _movement;

    void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
        _movement = new () { Stats = Stats };

        _rb.drag = Stats.Decceleration;
    }

    // Update is called once per frame
    void Update()
    {
        if (!Context.current.IsRunning) return;

        _rb.AddForce(_movement.RequestedMovement * Stats.Acceleration);
    }
}
