using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Room : MonoBehaviour
{
    private SpriteRenderer _screen;

    private void Awake()
    {
        _screen = transform.Find("Screen").GetComponent<SpriteRenderer>();
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (!collision.CompareTag("Player")) return;

        HandleTransition(true);
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (!collision.CompareTag("Player")) return;

        HandleTransition(false);
    }

    private void HandleTransition(bool TransitionIn)
    {
        _screen.DOKill();
        Context.current.MainCamera.DOKill();

        _screen.DOFade(TransitionIn ? 0 : 1, 0.4f);
        Context.current.MainCamera.DOOrthoSize(TransitionIn ? 5 : 12, 1.2f);
    }
}
